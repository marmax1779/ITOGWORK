const imageUrl = [];

        let images = [];
        let container = document.querySelector('.container');

        imageUrl.map((value, index) => {
            let img = document.createElement('img');
            img.src = value;
            img.className = 'image scale';
            images.push(img);
        })
        images.map((value, index) => {
            container.append(value);
        })