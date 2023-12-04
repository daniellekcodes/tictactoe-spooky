const gamestart = () => {


    let turn = 0;
    let hasWon = false;
    let player = "hi";

    const message = document.querySelector('.message');
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            if (hasWon) {
                return;
            }

            if (e.currentTarget.classList.contains('selected')) {
                return;
            }

            e.currentTarget.classList.add('selected');
            if (turn % 2 == 0) {
                e.currentTarget.classList.add('ghost');
                player = "Player 1";
                e.currentTarget.textContent = "1";
                message.textContent = "Next up, Player 2! Please select your tile";
            } else {
                e.currentTarget.classList.add('bat');
                player = "Player 2";
                e.currentTarget.textContent = "2";
                message.textContent = "Now, Player 1! Please select your tile";
            }

            turn++;
            determineWin();

        })
    });


    const determineWin = () => {
        let comboArr = "";
        if (squares[0].textContent && squares[0].textContent == squares[1].textContent && squares[0].textContent == squares[2].textContent) {
            comboArr = [squares[0], squares[1], squares[2]];

            for (let i = 0; i < comboArr.length; i++) {
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            console.log(message);
            hasWon = true;

        }

        if (squares[3].textContent && squares[3].textContent == squares[4].textContent && squares[3].textContent == squares[5].textContent) {
            comboArr = [squares[3], squares[4], squares[5]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[6].textContent && squares[6].textContent == squares[7].textContent && squares[6].textContent == squares[8].textContent) {
            comboArr = [squares[6], squares[7], squares[8]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[0].textContent && squares[0].textContent == squares[3].textContent && squares[0].textContent == squares[6].textContent) {
            comboArr = [squares[0], squares[3], squares[6]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[1].textContent && squares[1].textContent == squares[4].textContent && squares[1].textContent == squares[7].textContent) {
            comboArr = [squares[1], squares[4], squares[7]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[2].textContent && squares[2].textContent == squares[5].textContent && squares[2].textContent == squares[8].textContent) {
            comboArr = [squares[2], squares[5], squares[8]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[0].textContent && squares[0].textContent == squares[4].textContent && squares[0].textContent == squares[8].textContent) {
            comboArr = [squares[0], squares[4], squares[8]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (squares[2].textContent && squares[2].textContent == squares[4].textContent && squares[2].textContent == squares[6].textContent) {
            comboArr = [squares[2], squares[4], squares[6]];
            for (let i = 0; i < comboArr.length; i++) {
                console.log(comboArr[i]);
                comboArr[i].classList.add('win');
            }
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (turn == 9 && hasWon) {
            message.textContent = `${player} Wins!`;
            hasWon = true;
        }

        if (turn == 9 && !hasWon) {
            message.textContent = "Cat's Game. Nobody Wins";
            hasWon = true;
        }
    }
};

gamestart();


