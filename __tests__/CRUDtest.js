
describe('Basic user flow for Website', () => {
    // First, visit the lab 8 website
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/index.html');
    });

       //Add new note
    it('Testing Adding a Note', async() => {
        console.log('Testing adding a note functionality...')
        // Click on the add note button
        await page.click('.add-note');
        const updatedNotes = await page.$$('.note');

        // Expect the updated number of notes to be one more than initial
        expect(updatedNotes.length).toBe(1);
    }, 20000);

    //Edit new note
    it('Testing Editing a new Note', async() => {
        console.log('Testing editing a new note functionality...')

        await page.click('.add-note');
        let updatedNotes = await page.$$('.note');
        let newNote = updatedNotes[updatedNotes.length - 1];
        await newNote.type("sahhh dude");
        await page.click('body');

        let noteContent = await newNote.evaluate(note => note.value);

        expect(noteContent).toBe('sahhh dude');
        expect(updatedNotes.length).toBe(2);
    }, 20000);


    //Edit existing note
    it('Testing Editing an existing Note', async() => {
        let noteElements = await page.$$('.note');
        let editNote = noteElements[0];
        await editNote.type("whats good man");
        await page.click('body');

        let noteContent = await editNote.evaluate(note => note.value);

        expect(noteContent).toBe("whats good man");
        await page.keyboard.press('Tab');
    }, 20000);


    //Notes are saved locally
    it('Testing Notes are saved locally', async() => {
        await page.reload(); 

        const refreshedNotes = await page.$$('.note');
        const noteOne = refreshedNotes[1];

        let noteContent = await noteOne.evaluate(note => note.value);

        expect(noteContent).toBe('sahhh dude');
    }, 20000);

    //Delete note by double clicking on note
    it('Testing Deleting a Note', async() => {
        console.log("Checking if deleting a note functionality works");
        let noteElements = await page.$$('.note');
        await noteElements[0].click({clickCount: 2});
        let notes = await page.$$('.note');
        expect(notes.length).toBe(1);

    }, 20000); 
});