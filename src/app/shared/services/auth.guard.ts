import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _route = inject(Router);
  let isLoggedIn = "true" // sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn == "true") {
    return true;
  }
  else {
    alert('Not a authentic user detected please login!');
    _route.navigate(['login']);
    return false;
  }
};
