       var grades = new Array(18);

            for(var currentGrade = 0; currentGrade < grades.length; currentGrade++){
              
                grades[currentGrade] = (Math.random() * 4 + +10).toFixed(2);
            }


            console.log((grades));