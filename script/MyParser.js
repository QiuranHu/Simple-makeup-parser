"use strict";
class MyHtmlHandler {
    TextChangeHandler(inputId, outputId) {
        let inputElement = document.getElementById(inputId);
        let outputElement = document.getElementById(outputId);
        inputElement.onkeyup = () => {
            this.changeContentInOutput(inputElement, outputElement);
        };
    }
    changeContentInOutput(inputElement, outputElement) {
        let lines = inputElement.value.split('\n');
        let html = "";
        for (let index = 0; index < lines.length; index++) {
            let line = lines[index];
            if (line.startsWith("# ")) {
                html += "<h1>" + line.substr(2) + "</h1>";
            }
            else if (line.startsWith("## ")) {
                html += "<h2>" + line.substr(3) + "</h2>";
            }
            else if (line.startsWith("### ")) {
                html += "<h3>" + line.substr(4) + "</h3>";
            }
            else if (line.startsWith("---")) {
                html += "<hr>" + line.substr(3) + "</hr>";
            }
            else {
                html += "<p>" + line + "</p>";
            }
        }
        outputElement.innerHTML = html;
    }
}
//# sourceMappingURL=MyParser.js.map