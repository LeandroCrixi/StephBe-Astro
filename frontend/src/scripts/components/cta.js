class GlobalCTA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="not-sure">
        <h4>Not sure where to begin?</h4>
        <p>Schedule a consultation to explore how we can partner on your leadership journey.</p>
        <div>
          <a class="btn" 
            data-cal-link="stephbe/catch-up"
            data-cal-namespace="catch-up"
            data-cal-config='{"layout":"month_view"}'>
            Schedule a Call
          </a>
        </div>
      </section>
        `;
  }
}
customElements.define("global-cta", GlobalCTA);
export { GlobalCTA };
