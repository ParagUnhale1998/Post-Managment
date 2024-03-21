import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _dataSharingService = inject(DataSharingService);
  let userIsRegister: boolean = false;

  
  _dataSharingService.userRegister.subscribe((data) => {
    userIsRegister = data;
  });

  if (!userIsRegister) {
    router.navigateByUrl('');
    return false;
  } else {
    return true;
  }
};
