if (document.readyState !== 'loading') {
	bindHeaderDialogEvents();
} else {
	document.addEventListener('DOMContentLoaded', function () {
		bindHeaderDialogEvents();
	});
}

function bindHeaderDialogEvents() {
    const headerCatalogButton = document.querySelector('[data-header-catalog-button]');
    const headerCatalogDialog = document.querySelector('[data-header-catalog-dialog]');
    if (!headerCatalogButton || !headerCatalogDialog) {
        return;
    }

    const body = document.querySelector('body');
    const openedDialogBodyClass='body--opened-dialog';

    headerCatalogButton.addEventListener('click', function() {
        toggleHeaderDialog();
    });

    document.addEventListener('click', function(event) {
        if (isHeaderDialogOpened() &&
        !headerCatalogDialog.contains(event.target) &&
        !headerCatalogButton.contains(event.target)
    ) {
        toggleHeaderDialog();
    }
    });

    const dialogCatalogItems = headerCatalogDialog.querySelectorAll('[data-item-dialog-catalog]');
    if (dialogCatalogItems.length) {
        dialogCatalogItems.forEach((item) => {
            item.addEventListener('mouseenter', function() {
                const selectedItemClass = 'list-dialog-catalog__item--selected';
                dialogCatalogItems.forEach((element) => {
                    element.classList.remove(selectedItemClass);
                });
                item.classList.add(selectedItemClass);
            })
        });
    }

    function toggleHeaderDialog() {
        if (!headerCatalogDialog) {
            return;
        }
        
        body.classList.toggle(openedDialogBodyClass);
    }
    
    function isHeaderDialogOpened() {
        if (!headerCatalogDialog) {
            return false;
        }
    
        return body.classList.contains(openedDialogBodyClass);
    }
}