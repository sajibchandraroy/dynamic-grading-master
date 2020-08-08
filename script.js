function getGrade(id){    
    const subjectMarkNum = getInputNumber(id);    
    gradeCalculator(subjectMarkNum, id + '-grade')

    // const gradeBox = document.getElementById(id + '-grade');
    // if (0 <= subjectMarkNum && subjectMarkNum < 33){        
    //     gradeBox.innerText = "F";
    // }    
    // else if(33 <= subjectMarkNum && subjectMarkNum < 40){       
    //     gradeBox.innerText = "D";
    // }
    // else if(40 <= subjectMarkNum && subjectMarkNum < 50){       
    //     gradeBox.innerText = "C";
    // }
    // else if(50 <= subjectMarkNum && subjectMarkNum < 60){       
    //     gradeBox.innerText = "B";
    // }
    // else if(60 <= subjectMarkNum && subjectMarkNum < 70){       
    //     gradeBox.innerText = "A-";
    // }
    // else if(70 <= subjectMarkNum && subjectMarkNum < 80){       
    //     gradeBox.innerText = "A";
    // }
    // else{
    //     gradeBox.innerText = "A+"; 
    // }
    
}

function getInputNumber(id){
    const marks = document.getElementById(id + '-mark').value;
    const marksNumber = parseFloat(marks);
    return marksNumber;

}   

function finalGrade(){
    const banglaMarksNumber = getInputNumber('bangla');
    const englishMarksNumber = getInputNumber('english');
    const ictMarksNumber = getInputNumber('ict');
    const totalMarks = banglaMarksNumber + englishMarksNumber + ictMarksNumber;
    const avgMarkNum = totalMarks / 3;         
    document.getElementById('totalMarks').innerText = totalMarks;  
    gradeCalculator(avgMarkNum, 'final-grade');

    // if (0 <= avgMarkNum && avgMarkNum < 33){        
    //     document.getElementById('final-grade').innerText = "F";
    // }    
    // else if(33 <= avgMarkNum && avgMarkNum < 40){       
    //     document.getElementById('final-grade').innerText = "D";
    // }
    // else if(40 <= avgMarkNum && avgMarkNum < 50){       
    //     document.getElementById('final-grade').innerText = "C";
    // }
    // else if(50 <= avgMarkNum && avgMarkNum < 60){       
    //     document.getElementById('final-grade').innerText = "B";
    // }
    // else if(60 <= avgMarkNum && avgMarkNum < 70){       
    //     document.getElementById('final-grade').innerText = "A-";
    // }
    // else if(70 <= avgMarkNum && avgMarkNum < 80){       
    //     document.getElementById('final-grade').innerText = "A";
    // }
    // else{
    //     document.getElementById('final-grade').innerText = "A+"; 
    // }
}

function gradeCalculator(number, id){
    if (0 <= number && number < 33){        
        document.getElementById(id).innerText = "F";
    }    
    else if(33 <= number && number < 40){       
        document.getElementById(id).innerText = "D";
    }
    else if(40 <= number && number < 50){       
        document.getElementById(id).innerText = "C";
    }
    else if(50 <= number && number < 60){       
        document.getElementById(id).innerText = "B";
    }
    else if(60 <= number && number < 70){       
        document.getElementById(id).innerText = "A-";
    }
    else if(70 <= number && number < 80){       
        document.getElementById(id).innerText = "A";
    }
    else{
        document.getElementById(id).innerText = "A+"; 
    }

}
