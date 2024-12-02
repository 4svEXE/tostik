import React, { useState } from "react";
import "./index.scss";

const recipesData = [
  {
    id: 1,
    title: "Бутерброди гриль + варена картопля гриль + курятинка (за бажанням)",
    preview: "/tostik/img/home/recipes/1.png",
    content: (
      <>
        <p>🥪 <small>Готувати таку красу дуже просто:</small></p>
        <ul>
          <li>Беремо 2 грінки хліба.</li>
          <li>Змащуємо чим попало (кетчупом, майонезом, соєвим соусом).</li>
          <li>Кладемо на бутербродницю.</li>
        </ul>
        <p><strong>І ЦЕ ВСЕ!!!</strong></p>
        <p>Чекаємо 5 хвилин, і красиві, рум'яні, ароматні, апетитні та хрусткі тости готові!</p>
        <p>🥔 <strong>Додатковий рецепт картоплі гриль:</strong></p>
        <ul>
          <li>Варимо картоплю в лушпайках.</li>
          <li>Як зварилась, ріжемо наполовину і кладемо в бутербродницю! (Перед цим змащуємо насадку олією).</li>
        </ul>
        <p><strong>ВСЕ!!</strong></p>
        <p>НЕЙМОВІРНО АПЕТИТНА КАРТОПЛЯ ГОТОВА! Смакує з помідорами і часниковим соусом! 😊</p>
        <p><strong>Смачного!!</strong></p>
      </>
    )
  },
  {
    id: 2,
    title: "Шаурма",
    preview: "/tostik/img/home/recipes/6.png",
    content: (
      <>
        <h4>Інгредієнти:</h4>
        <ul>
          <li>М’ясо куряче – 200 г</li>
          <li>Прямокутний лаваш – 2 шт.</li>
          <li>Свіжа капуста – 100 г</li>
          <li>Морква по-корейськи – 100 г</li>
          <li>Помідори Черрі – 4 шт.</li>
          <li>Огірки свіжі – 1 шт.</li>
          <li>Кетчуп шашличний – 2 ст. л</li>
          <li>Майонез домашній – 2 ст. л</li>
        </ul>
        <h4>Спосіб приготування:</h4>
        <p>Покладіть на лаваш дрібно нашатковану капусту, обсмажену шматочками курятину, полийте кетчупом. Додайте огірки кружечками, помідори тонкими скибочками, моркву по-корейськи та майонез.</p>
        <p>Загорніть краї лаваша, скрутіть рулетом та поставте в мікрохвильову піч на декілька хвилин.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Ніжні хлібці з сиром",
    preview: "/tostik/img/home/recipes/5.png",
    content: (
      <>
        <p>Інгредієнти: Тости, сир, шинка, листя салату, соус йогуртовий, огірок</p>
        <h4>Спосіб приготування:</h4>
        <p>
          Зробіть сендвіч із сиру, шинки, листя салату та огірка. Змажте йогуртовим соусом
          і прогрійте на бутербродниці або в духовці.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Ніжні хлібці + салат",
    preview: "/tostik/img/home/recipes/3.png",
    content: (
      <>
        <p>Інгредієнти: Тости, сир, шинка, листя салату, соус йогуртовий, огірок</p>
        <h4>Спосіб приготування:</h4>
        <p>
          Візьміть ніжні хлібці, додайте сир, шинку та салат. Огірок поріжте 
          тонкими скибочками та викладіть зверху.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "Тарілка фуршет",
    preview: "/tostik/img/home/recipes/4.png",
    content: (
      <>
        <p>Складники: Чіпси, сухарики, картопля фрі та сердечка карамелізовані в соєвому соусі</p>
        <h4>Опис:</h4>
        <p>Смачна та легка закуска. Подавайте з улюбленим соусом!</p>
      </>
    )
  },
  {
    id: 6,
    title: "",
    preview: "/tostik/img/home/recipes/0.png",
    content: (
      <>
        <p><mark>Більше рецептів та корисної інформації у нас в інстаграмі</mark></p>
      </>
    )
  }
];


const Recipes: React.FC = () => {
  const [expandedRecipeIndex, setExpandedRecipeIndex] = useState<number | null>(null);

  const toggleRecipe = (index: number) => {
    setExpandedRecipeIndex(expandedRecipeIndex === index ? null : index);
  };

  return (
    <section className="Recipes my-10">
      <h2 className="mt-10">Галерея <mark>страв</mark></h2>

      <div className="recipes-box mt-10 px-5">
        {recipesData.map((recipe, index) => (
          <div key={recipe.id} className="recipe">
            <div className="preview">
              <img src={recipe.preview} alt={recipe.title} />
            </div>
            <h4>{recipe.title}</h4>
            {expandedRecipeIndex === index ? (
              <>
                {recipe.content}
                <button onClick={() => toggleRecipe(index)}>Приховати</button>
              </>
            ) : (
              <button onClick={() => toggleRecipe(index)}><mark>Більше</mark></button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
