
const storageKey = "feedback-form-state";
const formData = {
    form: document.querySelector('.feedback-form')
}

formData.form.addEventListener('input', (e) => {
    const inpEmail = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    const data = { inpEmail, message };
    saveToLS(storageKey, data);
})

function loadLs() {
  const data = loadFromLS(storageKey);
  formData.form.elements.email.value = data?.inpEmail || '';
  formData.form.elements.message.value = data?.message || '';
}

loadLs();

formData.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inpEmail = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    const data = { inpEmail, message };

      if (!data.inpEmail || !data.message) {
    alert("Fill please all fields");
    return;
  }


    console.log(data)
    localStorage.removeItem(storageKey);
    e.target.reset();
}
)


function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch (error){
    return body;
  }
} 
