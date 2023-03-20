let checkMediaQuery = window.matchMedia("(max-width: 640px)");
let locationDropdown= document.getElementById("locationDropdown");
let dropdownBtn= document.getElementById("dropdown-btn");
let dropdownOpen=false;
let checkDropdown=false;

function detectLocationDropdown() { 
    dropdownOpen=true;
    if(dropdownOpen===true && checkDropdown===false){
    locationDropdown.style.display="flex";
    dropdownBtn.style.transform="rotate(180deg)";
    dropdownBtn.style.transition="280ms ease-in-out";
    checkDropdown=true;
    }
    else{
        locationDropdown.style.display="none";
        dropdownBtn.style.transform="rotate(0deg)";
        checkDropdown=false;
    }
    
}

window.onclick=function(e){
    if (!e.target.matches('#dropdown-btn')){
        locationDropdown.style.display="none";
        dropdownBtn.style.transform="rotate(0deg)";
    }
}


// Bottom Accordian
let accordianDropdownOpen1=false;
let accordianCheckDropdown1=false;

let exploreNearMeConatiner=document.getElementById("Explore-near-me");

let popularCuisines=document.getElementById("Popular-cuisines");
popularCuisines.addEventListener("click",()=>{
    accordianDropdownOpen1=true;
    let exploreNearMeConatinerHeight=exploreNearMeConatiner.clientHeight;
    let cuisinesPanel=document.getElementById("cuisines-panel");

    if(accordianDropdownOpen1===true && accordianCheckDropdown1===false){      
        cuisinesPanel.style.display="block";
        accordianCheckDropdown1=true;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+380+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+130+"px";
        }
    }
    else{
        cuisinesPanel.style.display="none";
        accordianCheckDropdown1=false;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-380+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-130+"px";
        }
    }
    
});

let accordianDropdownOpen2=false;
let accordianCheckDropdow2=false;

let PopularRestaurant=document.getElementById("Popular-restaurant");
PopularRestaurant.addEventListener("click",()=>{
    
    accordianDropdownOpen2=true;
    let exploreNearMeConatinerHeight=exploreNearMeConatiner.clientHeight;
    let restuarantPanel=document.getElementById("restaurant-panel");

    if(accordianDropdownOpen2===true && accordianCheckDropdow2===false){      
        restuarantPanel.style.display="block";
        accordianCheckDropdow2=true;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+380+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+130+"px";
        }
    }
    else{
        restuarantPanel.style.display="none";
        accordianCheckDropdow2=false;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-380+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-130+"px";
        }
    }
});

let accordianDropdownOpen3=false;
let accordianCheckDropdow3=false;
let topRestaurant=document.getElementById("Top-restaurant");

topRestaurant.addEventListener("click",()=>{
    
    accordianDropdownOpen3=true;
    let exploreNearMeConatinerHeight=exploreNearMeConatiner.clientHeight;
    let topRestuarantPanel=document.getElementById("topRestaurants-panel");

    if(accordianDropdownOpen3===true && accordianCheckDropdow3===false){      
        topRestuarantPanel.style.display="flex";
        topRestuarantPanel.style.justifyContent="space-between";
        topRestuarantPanel.style.paddingRight="8rem";
        accordianCheckDropdow3=true;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+195+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+50+"px";
        }
    }
    else{
        topRestuarantPanel.style.display="none";
        accordianCheckDropdow3=false;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-195+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-50+"px";
        }
    }
});


let accordianDropdownOpen4=false;
let accordianCheckDropdow4=false;
let cities=document.getElementById("Cities");

cities.addEventListener("click",()=>{
    
    accordianDropdownOpen4=true;
    let exploreNearMeConatinerHeight=exploreNearMeConatiner.clientHeight;
    let citiesPanel=document.getElementById("cities-panel");

    if(accordianDropdownOpen4===true && accordianCheckDropdow4===false){      
        citiesPanel.style.display="grid";
        accordianCheckDropdow4=true;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+950+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight+530+"px";
        }
    }
    else{
        citiesPanel.style.display="none";
        accordianCheckDropdow4=false;
        if(checkMediaQuery.matches){
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-950+"px";
        }
        else{
            exploreNearMeConatiner.style.height=exploreNearMeConatinerHeight-530+"px";
        }
    }
});