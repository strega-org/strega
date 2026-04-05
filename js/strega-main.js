//strega using Oakwood Framework v4.1.0
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer-site">
                <div class="footer-item">
                    p><strong><p>📞 <a href="tel:+44 7801434050">+44 (0)7801 434050</a></strong></p>
                <p>✉️ <a href="mailto:reachme@stregahealth.com">reachme@stregahealth.com</a></p>
                <p>&copy; 2026 Strega Health. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}



class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="item-footer">
                <p><strong><p>📞 <a href="tel:+44 7801434050">+44 (0)7801 434050</a></strong></p>
                <p>✉️ <a href="mailto:reachme@stregahealth.com">reachme@stregahealth.com</a></p>
                <p>&copy; 2026 Strega Health. All rights reserved.</p>
            </div>
        `;
    }
}

customElements.define('site-footer', SiteFooter);

const fabs = document.querySelectorAll('.fab');

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300);
    });
});

// GoatCounter analytics
const gc = document.createElement('script')
gc.dataset.goatcounter = 'https://stregahealth.goatcounter.com/count'
gc.src = '//gc.zgo.at/count.js'
gc.async = true
document.head.appendChild(gc)


