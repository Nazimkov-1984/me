// carusel 

const   itemCharger = document.querySelectorAll('.charger__image-list__item'), 
        bulletCharger = document.querySelectorAll('.pagination__items'),
        bulletParentCharger = document.querySelector ('.charger__pagination');

        function hideTabCharger () {
            itemCharger.forEach (item => {
                item.style.display = 'none';
            });
            bulletCharger.forEach(item => {
                item.classList.remove('pagination__items--active');
            });
        }
        function showTabCharger (i) {
            itemCharger[i].style.display = 'block';
            bulletCharger[i].classList.add('pagination__items--active');
    
        }
        hideTabCharger ();
        showTabCharger (1);
        bulletParentCharger.addEventListener('click', () => {
        const target = event.target;
        if (target && target.classList.contains('pagination__items')) {
            itemCharger.forEach ( (item, i) => {
                if (target === item) {
                    hideTabCharger ();
                    showTabCharger (i); 
                    console.log ('hello');
                }
            });
        }
    });