let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / (height / 100 * height / 100)).toFixed(2)
        let bmiStatus = '';

        if(bmi < 18.6){
            body.style.backgroundImage = "url('thin.png')";
            bmiStatus = 'Under weight';
        } else if(bmi >= 18.6 && bmi < 24.9){
            body.style.backgroundImage = "url('normal.png')";
            bmiStatus = 'Normal';
        } else {
            body.style.backgroundImage = "url('over-weight.png')";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundSize = "cover";

            bmiStatus = 'Over weight';
        }

        alert('Your weight is ' + bmiStatus + ' : ' + bmi);
        wrapper.style.display = 'none'; // İçeriği gizle
    } else {
        alert('The form has errors');
    }
});

