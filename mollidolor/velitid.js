    class AncestorParse {
        constructor() {
            this.fields = {
                name: 'John Doe',
                age: 30,
                occupation: 'Engineer'
            };
        }

        get(field) {
            return this.fields[field];
        }
    }

    const ancestorParse = new AncestorParse();
    const field = 'occupation';
    const parsedAs = ancestorParse.get(field);

    console.log(parsedAs); // Output: Engineer
    