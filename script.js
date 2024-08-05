document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url(https://us.rule34.xxx//samples/5690/sample_efeeb1c540ee5566c0bfa0cf00e841a3.jpg?10370894)',
        'url(https://us.rule34.xxx//samples/2120/sample_669d83b1e78cf32923b352be79d9c99b.jpg?10485389)',
        'url(https://us.rule34.xxx//samples/1153/sample_6323e502cc5a0c10fef0dffc0ac57bf6.jpg?10792098)',
        'url(https://us.rule34.xxx//images/1294/811b2a23fa5a795cb88c5b831f4d1529.png?9895876)',
        'url(https://us.rule34.xxx//samples/2574/sample_5aaa7723fba056f005fe570842d966b7.jpg?9912067)',
        'url(https://us.rule34.xxx//samples/2344/sample_f48da37feafd5b2e78e0a94e5d091aaa.jpg?10248603)',
        'url(https://us.rule34.xxx//samples/2629/sample_8a85d2edda5e5b490ab232ddbdcc05fb.jpg?10464233)',
        'url(https://us.rule34.xxx//samples/2366/sample_1f0e7d87567e7144c546b027e75aa66a.jpg?10416677)',
        // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.documentElement.style.setProperty('--background-image', selectedImage);
});
