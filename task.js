class pageView {
    
    constructor() {
        this.book = document.getElementById("book");
        let _this = this;

        //РАЗМЕР ШРИФТА:
        if(true) {
            this.FontSizes = Array.from(document.querySelector(".book__control_font-size").children);
            this.actFS = 1;
            this.getFSClassName(this.actFS, true);
            //Клик по размеру шрифта:
            for (let i = 0; i < this.FontSizes.length; i++) {
                this.FontSizes[i].onclick = function(event) {
                    if (_this.actFS != i) {
                        //снимаем активацию текущего размера шрифта:
                        _this.getFSClassName(_this.actFS, false);
                        _this.FontSizes[_this.actFS].className = _this.FSClassName;

                        //Активируем новый размер шрифта:
                        _this.actFS = i;
                        _this.getFSClassName(_this.actFS, true);
                        _this.FontSizes[_this.actFS].className = _this.FSClassName;
                    };

                    _this.getBookClassName();

                    //Блокирует переход по ссылке:
                    return false;
                }
            }
        }

        //ЦВЕТ ТЕКСТА:
        if(true) {
            this.FontColor = Array.from(document.querySelector(".book__control_color").children);
            this.FontColor.shift();
            this.actColor = 0;
            //Клик по цвету шрифта:
            for (let i = 0; i < this.FontColor.length; i++) {
                this.FontColor[i].onclick = function(event) {
                    if (_this.actColor != i) {
                        //снимаем активацию текущего цвета шрифта:
                        _this.getFCClassName(false);

                        //Активируем новый цвет шрифта:
                        _this.actColor = i;
                        _this.getFCClassName(true);

                        _this.getBookClassName();
                    }

                    //Блокирует переход по ссылке:
                    return false;
                }
            }
        }   

        //ЦВЕТ ФОНА:
        if(true) {
            this.BGColor = Array.from(document.querySelector(".book__control_background").children);
            this.BGColor.shift();
            this.actBGColor = 2;
            //Клик по цвету фона:
            for (let i = 0; i < this.BGColor.length; i++) {
                this.BGColor[i].onclick = function(event) {
                    if (_this.actBGColor != i) {
                        //снимаем активацию текущего цвета фона:
                        _this.getBGCClassName(false);

                        //Активируем новый цвет шрифта:
                        _this.actBGColor = i;
                        _this.getBGCClassName(true);

                        _this.getBookClassName();
                    }

                    //Блокирует переход по ссылке:
                    return false;
                }
            }
        }   
    }

    //Генерация className для book:
    getBookClassName() {
        this.BookCN = "book"
        //Размер шрифта:
        let size = "";
        if (this.FontSizes[this.actFS].hasAttribute("data-size")) {size = " book_fs-" + (this.FontSizes[this.actFS].getAttribute("data-size"))};
        
        //Цвет текста:
        let fontColor = " book_color-" + this.FontColor[this.actColor].getAttribute("data-text-color");
        //Цвет фона:
        let BGColor = " bg_color_" + this.BGColor[this.actBGColor].getAttribute("data-bg-color");

        //Итого:
        this.BookCN = this.BookCN + size + BGColor + fontColor ;
        this.book.className = this.BookCN;
    }

    //Генерация className для font-size:
    getFSClassName(i, act) {
        let size = ""
        if (this.FontSizes[i].hasAttribute("data-size")) {size = "font-size_" + (this.FontSizes[i].getAttribute("data-size"))};
        if(act) {size = size + " font-size_active"}
        this.FSClassName = "font-size " + size;
    }

    //Генерация className для FontColor:
    getFCClassName(act) {
        let color = "color text_color_" + this.FontColor[this.actColor].getAttribute("data-text-color");
        if (act) {color = color + " color_active"};
        this.FCClassName = color;
        this.FontColor[this.actColor].className = this.FCClassName;
    }

    //Генерация className для bg-color:
    getBGCClassName(act) {
        let bgcolor = "color bg_color_" + this.BGColor[this.actBGColor].getAttribute("data-bg-color");
        if (act) {bgcolor = bgcolor + " color_active"};
        this.BGCClassName = bgcolor;
        this.BGColor[this.actBGColor].className = this.BGCClassName;
    }
}




x = new pageView();

