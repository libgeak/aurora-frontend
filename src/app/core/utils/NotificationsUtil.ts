
import Swal, {  SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

export class NotificationsUtil {
  private static Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  static showMessage(titleDialog: string, contentText: string, typeAlert: any): Promise<SweetAlertResult> {
   // this.hideLoading();

    return Swal.fire({title: titleDialog,
                text: contentText,
                icon: typeAlert,
                showConfirmButton: true,
              //  timer: 1500,

            });
 }
/*
 static toastMessage(contentText: string, typeText: SweetAlertOptions = 'success'): void {
  this.Toast.fire({ title: contentText,
    icon: typeText
  });
}
*/

static toastMessage(contentText: string, typeText: SweetAlertIcon = 'success'): void {
  this.Toast.fire({ title: contentText,
    icon: typeText
  });
}
  static showWarn(contentText: string, titleDialog: string = 'Alerta'): void {
      this.showMessage(   titleDialog,
                          contentText,
                          'warning');
  }

  static showError(contentText: string, titleDialog: string = 'Error'): Promise<SweetAlertResult> {
      const contentMessage = (contentText) ? contentText : 'Ha ocurrido un error inesperado';
      return this.showMessage(   titleDialog,
                          contentMessage,
                          'error');
  }

  static showComplete(contentText: any): Promise<SweetAlertResult> {
      return this.showMessage(   'Éxito',
                          contentText.messageResponse ,
                          'success');
  }

  static showSuccess(contentText: string = 'El proceso se ha realizado exitosamente',
                    titleDialog: string = 'Éxito'):
    Promise<SweetAlertResult> {
      return this.showMessage(   titleDialog,
                          contentText,
                          'success');
  }

  static showInfo(contentText: string, titleDialog: string = 'Información'): Promise<SweetAlertResult> {
      return this.showMessage(   titleDialog,
                          contentText,
                          'info');
  }

  static toastSuccess(contentText: string): void {
    this.toastMessage(contentText, 'success' );
  }

  static toastError(contentText: string): void {
    this.toastMessage(contentText, 'error' );
  }

  static toastInfo(contentText: string): void {
    this.toastMessage(contentText, 'info');
  }

  static showConfirm(contentText: string = '¿Desea continuar con la operación?',
                    titleDialog: string = 'Confirmación',
                    showAsHtml?: boolean): Promise<SweetAlertResult>  {
      //this.hideLoading();
      return Swal.fire({
          title: titleDialog,
          text: (!showAsHtml ? contentText : ""),
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'No',
          /*,

          confirmButtonClass: 'is-primary',

          */
        });
  }

  static showException(error: any): Promise<SweetAlertResult> {
    const titleDialog = !error.error.errorResponse ? 'Ha ocurrido un error en la aplicación' : error.error.errorResponse;
    const contentText = !error.error.messageResponse ? 'Consulte al Administrador del Sistema' : error.error.messageResponse;
    console.log(error);
    if (titleDialog && titleDialog === 'INFO') {
      return this.showInfo(contentText);
    }

    return this.showError(contentText);
  }

}
