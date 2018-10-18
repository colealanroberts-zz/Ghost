class Ghost {
    constructor(options) {
        this.options = options;
    }

    get options() {
        return this._options;
    }

    set options(value) {
        if (!Object.keys(value).length) {
            throw "Pass in an object.";
          }

          switch(true) {
              case (!value.hasOwnProperty('selector')):
                throw `The property ${ Object.keys(value)[0] } is not a valid option. Did you mean 'selector'?`;

            case (!value.hasOwnProperty('effect')):
                throw `The property ${ Object.keys(value)[1] } is not a valid option. Did you mean 'effect'?`;
            
            case (!value.hasOwnProperty('text')):
                throw `The property ${ Object.keys(value)[2] } is not a valid option. Did you mean 'text'?`;

            case (!value.hasOwnProperty('interval')):
                throw `The property ${ Object.keys(value)[3] } is not a valid option. Did you mean 'interval'?`;

            case (!value.hasOwnProperty('delay')):
                throw `The property ${ Object.keys(value)[4] } is not a valid option. Did you mean 'delay'?`;

            case (!value.hasOwnProperty('animation')):
                throw `The property ${ Object.keys(value)[5] } is not a valid option. Did you mean 'animation'?`;    
          }

          this._options = value;
    }

    /* 
    * Creates a new DOM element and adds 
    * the appropriate CSS classes
    * this is used in both the reveal and create methods
    * returns an HTML Element
    */
    __createElement() {
        let e = document.createElement('span');
        e.classList.add('ghost-char', `animation-${this.options.animation}`);
        return e;
    }

    /* 
    * Accepts the text option passed in
    * and applies the appropriate CSS class to it
    * in a single pass
    */
    __reveal() {
        let el = this.__createElement();
        el.innerText = this.options.text;

        setTimeout(() => {
            el.classList.add('active');
        }, this.options.delay);

        document.querySelector(this.options.selector).insertAdjacentElement('beforeend', el);
    }

    /* 
    * Accepts the text option passed in
    * and creates an array of each character applying the respective
    * animation style to each element with a delay using the delay option
    */
   __typewriter() {
        let arr = this.options.text.split('');

        for (let i = 0, len = arr.length; i < len; i++) {
            let char = arr[i];
            let el = this.__createElement();
            
            char = char === ' ' ? el.innerHTML = '&nbsp;' : el.innerText = char;
            
            setTimeout(() => {   
                setTimeout(() => {
                    el.classList.add('active'); 
                }, this.options.delay);
                    
                document.querySelector(this.options.selector).insertAdjacentElement('beforeend', el);
            }, i * this.options.interval);
        }
    }

    /*
    * Accepts an effect type of either 'reveal' or 'typewriter' 
    * which chooses the appropriate internal method 
    */
    animate() {
        switch(this.options.effect) {
        case 'reveal':
            this.__reveal();
            break;
        
        case 'typewriter':
            this.__typewriter();
            break;
        }
    }
}
