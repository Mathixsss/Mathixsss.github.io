function toggleLogin(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else { 
        element.innerText = "Login";
    }
}

function LikeNinja(element) {
    alert("This page says\Ninja was liked");
    let count = parseInd(element.innerText);
    count++;
    element.innerText = count + "likes"
}

function addLike(element) {
    let count = parseInt(element.innerText);
    count++;
    element.innerText = count + "Likes";
}

function removeBtn(element) {
    element.remove();
}
