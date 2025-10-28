
    <script>
            // 2. Bordures colorées aléatoires sur les thumbnails projets
                    const thumbnails = document.querySelectorAll('.project .thumbnail');
                    thumbnails.forEach(thumb => {
                    thumb.style.borderBottom = `4px solid ${getRandomColor()}`;
                    });

                    // 3. Accent coloré sur le bouton retour (page atelier)
                    const btnRetour = document.querySelector('.button_retour');
                    if (btnRetour) {
                    btnRetour.addEventListener('mouseenter', function() {
                        this.style.borderLeft = `4px solid ${getRandomColor()}`;
                    });
                    btnRetour.addEventListener('mouseleave', function() {
                        this.style.borderLeft = '1px solid #ddd';
                    });
                    }

                    // 4. Points décoratifs colorés sur les h2
                    const h2Elements = document.querySelectorAll('section h2');
                    h2Elements.forEach(h2 => {
                    const dot = document.createElement('span');
                    dot.style.cssText = `
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        background: ${getRandomColor()};
                        border-radius: 50%;
                        margin-left: 0.5rem;
                        vertical-align: middle;
                    `;
                    h2.appendChild(dot);
                    });

                    // 5. Première lettre colorée des h3 (À propos)
                    const h3Elements = document.querySelectorAll('#apropos h3');
                    h3Elements.forEach(h3 => {
                    const text = h3.innerHTML;
                    const firstLetter = text.charAt(0);
                    h3.innerHTML = `<span style="color: ${getRandomColor()}">${firstLetter}</span>${text.slice(1)}`;
                    });
    </script>
    <script>
            // Filtre coloré aléatoire sur projets
      const projects = document.querySelectorAll('.project');

      projects.forEach(project => {
        const thumbnail = project.querySelector('.thumbnail');
        
        project.addEventListener('mouseenter', function() {
          const color = getRandomColor();
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);
          
          // Applique le filtre coloré
          const afterEl = window.getComputedStyle(thumbnail, '::after');
          thumbnail.style.setProperty('--filter-color', `rgba(${r}, ${g}, ${b}, 0.3)`);
          thumbnail.querySelector('::after')?.style.setProperty('background', `rgba(${r}, ${g}, ${b}, 0.3)`);
          
          // Solution plus simple : créer un div overlay
          let overlay = thumbnail.querySelector('.color-overlay');
          if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'color-overlay';
            overlay.style.cssText = `
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              transition: opacity 0.4s ease;
              z-index: 1;
            `;
            thumbnail.appendChild(overlay);
          }
          overlay.style.background = `rgba(${r}, ${g}, ${b}, 0.3)`;
          overlay.style.opacity = '1';
        });
        
        project.addEventListener('mouseleave', function() {
          const overlay = thumbnail.querySelector('.color-overlay');
          if (overlay) {
            overlay.style.opacity = '0';
          }
        });
      });
    </script>
