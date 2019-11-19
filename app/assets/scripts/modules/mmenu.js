import $ from 'jquery';

class mmenu{
    constructor(){
        this.header = $(".header");
        this.minuIcon = $(".header__menu-icon");
        this.menuContent = $(".header__menu-content");
        this.events();
    }


    events(){
        this.minuIcon.click(this.toggelTheMenu.bind(this));
    }

    toggelTheMenu(){
        this.menuContent.toggleClass("header__menu-content--is-visible ");
        this.header.toggleClass("header--expanded");
        this.minuIcon.toggleClass("header__menu-icon--close")
    }
}

export default mmenu;