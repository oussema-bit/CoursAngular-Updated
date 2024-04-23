import { AbstractControl } from '@angular/forms';

export function lezmArctic(control: AbstractControl) {
  let s:string=control.value;

  if (s.includes('arctic')) {
    return { invalidUrl: true };
  }
  return null;
}
