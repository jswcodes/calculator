let results = []
let validResults = []

while (true) {
    let x = prompt("enter first number:")
    if (x === null) break
    let y = prompt("enter second number:")
    if (y === null) break
    let operator = prompt("enter an operator (+, -, *, /, %):")
    if (operator === null) break

    x = parseFloat(x)
    y = parseFloat(y)
    
    let result = calculate(x, y, operator)
    results.push({ x, y, operator, result })

    if (typeof result === 'number') validResults.push(result)
}

showResultsTable()

if (validResults.length > 0) {
    showSummaryTable()
} else {
    document.write("<p>no valid results to summarize.</p>")
}

function calculate(x, y, operator) {
    if (isNaN(x) || isNaN(y)) return "error: enter numbers only!"

    if (operator === "+") return x + y
    if (operator === "-") return x - y
    if (operator === "*") return x * y
    if (operator === "/") return y !== 0 ? x / y : "error: cannot divide by zero!"
    if (operator === "%") return y !== 0 ? x % y : "error: cannot divide by zero!"

    return "error: invalid operator!"
}

function showResultsTable() {
    document.write("<table>")
    document.write("<tr><th>number 1</th><th>operator</th><th>number 2</th><th>result</th></tr>")

    for (let result of results) {
        document.write(`<tr><td>${result.x}</td><td>${result.operator}</td><td>${result.y}</td><td>${result.result}</td></tr>`)
    }

    document.write("</table>")
}

function showSummaryTable() {
    let min = Math.min(...validResults)
    let max = Math.max(...validResults)
    let total = validResults.reduce((a, b) => a + b, 0)
    let avg = total / validResults.length

    document.write("<table>")
    document.write("<tr><th>minimum</th><th>maximum</th><th>average</th><th>total</th></tr>")
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${total}</td></tr>`)
    document.write("</table>")
}
