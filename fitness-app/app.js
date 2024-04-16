function button(){
    let exercise = document.getElementById("exercise").value;
    let weight = document.getElementById("weight").value;
    let reps = document.getElementById("reps").value;

    document.getElementById("input-print").innerHTML = `
    I did ${exercise} with ${weight} kgs for ${reps}x.
    `;
    
}
    


