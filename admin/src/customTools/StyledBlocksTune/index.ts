"use strict"

interface StyledBlocksStyle {
    title: string
    key: string
    background: string
    icon: string
}

interface IConfig {
    styles: StyledBlocksStyle[]
}

export class StyledBlocksTune {
    data: string
    blockContent: any
    styles: StyledBlocksStyle[]

    constructor({ data, config }: any) {
        if (!data) {
            data = '';
        }
        this.data = data;
        this.styles = [];
        console.log('hest c', config)
        if (config && config.styles) {
            this.styles = config.styles;
        }
    }

    static get isTune() {
        return true;
    }

    wrap(blockContent: HTMLElement, style: StyledBlocksStyle) {
        blockContent.style.backgroundColor = '';
        blockContent.style.paddingLeft = '';
        blockContent.querySelector('.styled-blocks-label')?.remove();
        if (this.data) {
            const label = window.document.createElement('div');
            label.classList.add('styled-blocks-label');
            label.innerText = style.title;
            label.style.position = 'absolute';
            label.style.top = '3px';
            label.style.right = '3px';
            label.style.opacity = '0.5';
            blockContent.appendChild(label);
            blockContent.style.backgroundColor = style.background;
            blockContent.style.position = 'relative';
            blockContent.style.paddingLeft = '1em';
            //blockContent.classList.add('is-teacher-only');
            blockContent.querySelector
        }
        this.blockContent = blockContent;
        return blockContent;
    }

    save() {
        return this.data;
    }

    protected addButton(style: StyledBlocksStyle): HTMLElement {
        console.log('hest',)
        const button = window.document.createElement('div');
        const icon = window.document.createElement('div');
        icon.classList.add('ce-popover__item-icon');
        icon.innerHTML = style.icon;

        // Create label
        const label = window.document.createElement('div');
        label.innerText = style.title;
        label.classList.add('ce-popover__item-label');
        button.classList.add('ce-popover__item');
        button.appendChild(icon);
        button.setAttribute('data-styled-block-style', this.data)
        button.appendChild(label);
        button.addEventListener('click', () => {
            if (style.key === this.data) {
                this.data = '';
            } else {
                this.data = style.key;
            }
            this.wrap(this.blockContent, style);
        });
        return button;
    }

    public render(): HTMLElement {
        const self = this;
        const wrapper = window.document.createElement('div');
        // let button;
        this.styles.forEach((style: StyledBlocksStyle) => {
            const button = self.addButton(style);
            wrapper.appendChild(button);
        });
        // if (!button) {
        //     button = this.addButton(this.styles[0]);
        // }

        return wrapper;
    }
}
