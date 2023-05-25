abstract class SoupRecipe {
    private prepareIngredients(): void {
        console.log("Собираю ингредиенты");
    }

    private cookSoup(): void {
        console.log("Готовлю суп");
    }

    private seasonSoup(): void {
        console.log("Добавляю приправы");
    }

    private serveSoup(): void {
        console.log("Суп готов");
    }

    abstract addSpecificIngredients(): void;
    abstract addSpecificSeasoning(): void;

    makeSoup(): void {
        this.prepareIngredients();
        this.addSpecificIngredients();
        this.cookSoup();
        this.addSpecificSeasoning();
        this.seasonSoup();
        this.serveSoup();
    }
}

export class OkroshkaRecipe extends SoupRecipe {
    addSpecificIngredients(): void {
        console.log("Добавляю квас, огурцы, картошку, редиску, яйца");
    }

    addSpecificSeasoning(): void {
        console.log("Добавляю зелень, соль, сметану");
    }
}

export class ChickenNoodleSoupRecipe extends SoupRecipe {
    addSpecificIngredients(): void {
        console.log("Добавляю курицу и лапшу");
    }

    addSpecificSeasoning(): void {
        console.log("Добавляю соль, перец");
    }
}
