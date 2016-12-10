export const image = (data) => {
  return (
    `<img src="${data.url}"
      alt="${data.alt || ''}"
      width="${data.width}"
      height="${data.height}">`
  );
};

export const gameOption = (imageData) => {
  return `
    <div class="game__option">
      ${image(imageData)}
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  `;
};
