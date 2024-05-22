import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../service/profil/user.service';
import { DocumentUploadService } from '../service/document-upload.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateUserDto } from '../models/update-user-dto';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  user: User ;
  update:FormGroup;

  constructor(
    private formb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router:Router,
    public tokenService : TokenStorageService
  ) {}

  ngOnInit(): void {
   
    if(this.tokenService.isLoggedIn()){
      this.getUserProfile();
    }
    
    this.update=this.formb.group({
       
      firstname:[''],
      lastname:[''],
      password:['']
      // photo:['',Validators.required]
    })
  }

 
 getUserProfile() : void{
  this.userService.getProfile().subscribe((res)=>{
    this.user = res;
    console.log ("user.............",this.user)
    
    this.toastr.success('Profil chargé avec succès');
  });
}



updateProfile(): void {
  const userUpdate : UpdateUserDto = this.update.value
 
   
    this.userService.updateProfile(userUpdate).subscribe({
      next: (response) => {
        this.user=response
        console.log('user update  : '+this.user)
        this.toastr.success('Profil mis à jour avec succès');
      },
      error: (error) => {
        this.toastr.error('Erreur lors de la mise à jour du profil.', error);
      }
    });
  } 

  goToCompte() :void{
    this.router.navigateByUrl("/compte")
  }
  
  logout() :void {
    this.tokenService.signOut();
    this.router.navigateByUrl("/home");
  }


  uploadProfilePhoto(event: any): void {
    const profilePhoto: File = event.target.files[0];
    if (profilePhoto) {
        this.userService.uploadPhoto(profilePhoto).subscribe({
            next: (response) => {
              console.log('error',response)
                this.toastr.success('Photo de profil téléchargée avec succès');
                this.user.profilePhoto = response;  
            },
            error: (error) => {
                this.toastr.error('Erreur lors du téléchargement de la photo de profil');
            }
        });
    }
}

}
