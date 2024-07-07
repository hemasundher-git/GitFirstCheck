function displayText(link_name) {

    if (document.getElementById('heading1').textContent=='click below button to tell your name'){
        get_name('first enter you name');
    }
    var name=document.getElementById('heading1').textContent;

    var textBoxValue = document.getElementById('inputTextBox').value; // Get text from textbox
    var td_data = `${name} you clicked : ${link_name}, age : ${textBoxValue}`;

    document.getElementById('table_p').textContent = td_data; // Display text in paragraph
}

// take care recursion handling
function get_name(msg){
    var name=prompt(msg);
    if (name==null || name==""){
        name=get_name('NAMEEEEEEE : ');
      
    }
    else{
    document.getElementById('heading1').textContent=name;
    }

}