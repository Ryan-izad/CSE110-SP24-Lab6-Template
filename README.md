# Check Your Understanding 
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   
   **Within a Github action that runs whenever code is pushed**

It is ideal to have these tests run everytime code is pushed, to ensure that pull-requests only go through if the code is up to a certain level of quality. This ensures that everyone's code is up to the same standard at all times when merging to main. 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

**No**, not generally, since unit tests would be more ideal to test a function output. End-to-end testing are more useful for emulating user actions and testing the entire application workflow. 





