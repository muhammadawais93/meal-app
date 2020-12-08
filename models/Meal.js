class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordablity,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVagetarian,
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordablity = affordablity;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVagetarian = isVagetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;