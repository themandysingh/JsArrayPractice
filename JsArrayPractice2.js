(function() {

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
        const isOneNineteen = people.some(person => (new Date()).getFullYear() - person.year >= 19);
        console.log(isOneNineteen);
      // Array.prototype.every() // is everyone 19 or older?
        const isEveryoneNineteen = people.every(person => (new Date()).getFullYear() - person.year >= 19);
        console.log(isEveryoneNineteen);

      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
        const requiredCommentId = comments.find(comment => comment.id === 823423);
        console.log(requiredCommentId);

      // Array.prototype.findIndex()
      // Find the comment with this ID
      const requiredIndex = comments.findIndex(comment => comment.id === 823423);
      console.log(requiredIndex);
      // delete the comment with the ID of 823423
      const newComments = [
                            ...comments.slice(0, requiredIndex),
                            ...comments.slice(requiredIndex + 1)
                          ];

      console.log(newComments);
})();