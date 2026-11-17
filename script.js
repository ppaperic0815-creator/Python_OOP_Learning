
// 虛擬寵物類別
class Pet {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.age = 0;
        this.hunger = 5;
        this.happiness = 5;
    }

    // 餵食：降低飢餓程度
    feed() {
        this.hunger = Math.max(0, this.hunger - 2);
        this.showMessage(`${this.name} 吃飽了一點！`);
    }

    // 玩耍：增加快樂，但也增加飢餓
    play() {
        this.happiness = Math.min(10, this.happiness + 2);
        this.hunger = Math.min(10, this.hunger + 1);
        this.showMessage(`${this.name} 玩得很開心！`);
    }

    // 睡覺：年齡增加，恢復快樂和飢餓
    sleep() {
        this.age += 1;
        this.hunger = Math.min(10, this.hunger + 1);
        this.happiness = Math.min(10, this.happiness + 1);
        this.showMessage(`${this.name} 睡了一覺，長大一歲了！`);
    }

    // 顯示目前狀態
    status() {
        const statusArea = document.getElementById("petStatus");

        statusArea.innerHTML = `
            <h3>🐾 ${this.name}（${this.species}）</h3>
            <p>年齡：${this.age} 歲</p>
            <p>飢餓程度：${this.hunger}/10</p>
            <p>快樂程度：${this.happiness}/10</p>
            <p>🍚 飽足狀態：${this.hunger <= 2 ? "很飽" : this.hunger >= 8 ? "很餓" : "普通"}</p>
            <p>😊 心情：${this.happiness >= 8 ? "非常開心" : this.happiness <= 2 ? "不太開心" : "普通"}</p>
        `;
    }

    // 顯示操作訊息
    showMessage(message) {
        this.status();

        const statusArea = document.getElementById("petStatus");

        statusArea.innerHTML += `
            <hr>
            <p>📢 ${message}</p>
        `;
    }
}

// 目前的寵物
let myPet = null;

// 建立寵物
function createPet() {
    const name = document.getElementById("petName").value.trim();
    const species = document.getElementById("petSpecies").value;

    if (name === "") {
        alert("請輸入寵物名字！");
        return;
    }

    myPet = new Pet(name, species);
    myPet.status();
}

// 餵食
function feedPet() {
    if (!checkPet()) return;
    myPet.feed();
}

// 玩耍
function playPet() {
    if (!checkPet()) return;
    myPet.play();
}

// 睡覺
function sleepPet() {
    if (!checkPet()) return;
    myPet.sleep();
}

// 確認是否已建立寵物
function checkPet() {
    if (myPet === null) {
        alert("請先建立寵物！");
        return false;
    }

    return true;
}
