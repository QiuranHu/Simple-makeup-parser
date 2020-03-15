class MyHtmlHandler {
    public TextChangeHandler(inputId: string, outputId: string): void{
        let inputElement = <HTMLTextAreaElement> document.getElementById(inputId);
        let outputElement = <HTMLLabelElement> document.getElementById(outputId);
        inputElement.onkeyup = () => {
            this.changeContentInOutput(inputElement, outputElement);
        }
    }
    private changeContentInOutput(inputElement: HTMLTextAreaElement, outputElement: HTMLLabelElement): void{
        let lines: string[] = inputElement.value.split('\n');
        let html: string = "";
        for(let index = 0; index < lines.length; index ++){
            let line: string = lines[index];
            if(line.startsWith("# ")){
                html += "<h1>" + line.substr(2) + "</h1>";
            } else if(line.startsWith("## ")){
                html += "<h2>" + line.substr(3) + "</h2>";
            } else if(line.startsWith("### ")){
                html += "<h3>" + line.substr(4) + "</h3>";
            } else if(line.startsWith("---")){
                html += "<hr>" + line.substr(3) + "</hr>";
            } else{
                html += "<p>" + line + "</p>";
            }
        }
        outputElement.innerHTML = html;
    }
}