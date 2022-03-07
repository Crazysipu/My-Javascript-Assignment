function CanDrive(hasDrivingLiscence, isTired, isSober) {// true,true,false
    // Write you code here
    if(hasDrivingLiscence){// hasdrivingliscence=true
        if(isTired===true){//istired=true
            return "You shouldn't drive"//OUTPUT=You shouldn't drive
        }
        else if(isSober===false){// isSober=false
            return "You shouldn't drive"//Output= You shouldn't drive
        }
        else if(isTired===false && isSober===true){//isTired=true and isSober=true
            return "You can drive"
        }
    }
    else{
        return "You can't drive"
    }
}

module.exports = CanDrive;
