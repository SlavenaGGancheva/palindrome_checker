const input = document.getElementById("input");

const reversedString = (str) => {
    return str.split("").reverse().join("");
}

const check = () => {
    const value = input.value;
    const reversed = reversedString(value);
    
    if (value === reversed) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not a Palindrome")
    }
    input.value = "";
}