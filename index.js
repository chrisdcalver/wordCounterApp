
/*
1. Grab elements from the DOM
2. Set word count to 0
3. Funtion linked via onkeyup: add each word to an array when seperated by an seperated by space.
4. Take the total length of the array and update totalWords (?for statement needed)
5. Take the total value and display using innerHTML
*/

function textAreaCalc() {
    let textBox = document.getElementById('text-box').value;
    let totalWords = 0;
    let wordCount = textBox.split(' ')
    for (let i = 0; i < wordCount.length; i++) {
        if (wordCount[i] != '') {
            totalWords += 1
        }
    }
    document.getElementById('total-count').innerHTML = `Word Count: ${totalWords}`
}