

let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function Menu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "500px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }