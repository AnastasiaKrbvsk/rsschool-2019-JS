function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.replace( /\s/g, '');
    let current = '';
    let rpn = [];
    let stack = [];
    let openBrackets = 0;
    let closeBrackets = 0;
    for(let i = 0; i < expr.length; i++) {
        let priority = getPriority(expr[i]);
        if (priority === 1) openBrackets++;
        if (priority === -1) closeBrackets++;
    }
    if(openBrackets !== closeBrackets) {
        throw Error('ExpressionError: Brackets must be paired');
    }
    for(let i = 0; i < expr.length; i++) {
        let priority = getPriority(expr[i]);
        if ( priority === 1 
            || priority === 2 
            || priority === 3) {
            if (current) rpn.push(+current);
            current = '';
            while(stack.length && priority !== 1 && priority <= getPriority(stack[stack.length-1]))
                rpn.push(stack.pop());
            if(expr[i] === '/' &&  expr[i+1] === '0') {
                throw Error('TypeError: Division by zero.');
            }
            stack.push(expr[i]);
        } else {
            if(priority === -1) {
                if (current !== '') rpn.push(+current);
                current = '';
                let stackForOperator = stack.pop();
                while(stackForOperator !== '(') {
                    rpn.push(stackForOperator);
                    stackForOperator = stack.pop();
                }
            } else {
                current += expr[i];
            }
        }
    }

    if(current) rpn.push(+current);
    while(stack.length) rpn.push(stack.pop());    
    let result = [];
    for(let i = 0; i < rpn.length; i++) {
        let priority = getPriority(rpn[i]);
        if(priority > 1) {
            let a = result.pop();
            let b = result.pop();
            if (rpn[i] === '+') result.push(b+a);
            if (rpn[i] === '-') result.push(b-a);
            if (rpn[i] === '*') result.push(b*a);
            if (rpn[i] === '/') result.push(b/a);
        } else {
            result.push(rpn[i]);
        }
    }

    return result.pop();

    function getPriority (symbol) {
        switch(symbol) {
            case '*': case '/': return 3;
            case '+': case '-': return 2;
            case '(': return 1;
            case ')': return -1;
        }
    }
}



module.exports = {
    expressionCalculator
}
