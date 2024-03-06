document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const text = document.getElementById('textInput').value;

 
    const styles = [];
    const checkboxes = document.getElementsByName('styleCheckbox');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        styles.push(checkbox.value);
      }
    });

  
    let styledText = '<span>';
    styles.forEach(function(style) {
      styledText += `<span class="${style}">`;
    });
    styledText += text;
    styles.reverse().forEach(function(style) {
      styledText += '</span>';
    });
    styledText += '</span>';


    let alignment;
    const radios = document.getElementsByName('alignment');
    radios.forEach(function(radio) {
        if (radio.checked) {
            alignment = radio.value;
        }
    });

    document.getElementById('output').style.textAlign = alignment;


    // Выводим стилизированный текст на страницу
    document.getElementById('output').innerHTML = styledText;
  });