  // Toast function
        function toast({
            title = '',
            message = '',
            type = 'success',
            duration = 3000

        }) {
            const main = document.getElementById('toast');
            if (main) {
                const toast = document.createElement('div')
                const icons = {
                    success: 'fa-sharp fa-solid fa-circle-check',
                    info: 'fa-sharp fa-solid fa-circle-check',
                    warning: 'fa-solid fa-exclamation',
                    error: 'fa-solid fa-exclamation'
                }
                const icon = icons[type];
                toast.classList.add('toast', `toast--${type}`);
                toast.innerHTML = `
                <div class="toast_icon">
                    <i class="${icon}"></i>
                 </div>
                <div class="toast_body">
                    <h3 class="toast_title">${title}</h3>
                    <p class="toast_msg"> ${message}</p>
                </div>
                 <div class="toast_close">
                    <i class="fa-solid fa-xmark"></i>
                 </div>
            `;
                main.appendChild(toast);

            }
        }

         function showSuccessToast() {
            toast({
                title: 'Success ',
                message: 'You log in success',
                type: 'danger',
                duration: 3000
            });
        }

        function showDangerToast() {
            toast({
                title: 'Fall',
                message: 'You fall, please try',
                type: 'warning',
                duration: 3000
            });
        }