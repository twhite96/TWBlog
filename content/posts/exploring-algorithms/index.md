---
title: Exploring Algorithms
author: Tiffany White
spoiler: Algorithms are simple; they are a set of instructions broken down into simple steps in order to complete a larger task.
date: "2017-02-06"
---
## What Is Meant by an Algorithm?

Algorithms are simple: they are a set of instructions broken down into simple steps in order to complete a larger task.

For example, if I want to make a recipe for stuffed peppers, I would usually follow steps such as:

>  1. Preheat oven to 350°F.
>  2. Cut out stem ends of bell peppers.
>  3. Discard stems.
>  4. Scoop out seeds.
>  5. Bring 8 cups water to a boil in a large pot and blanch the peppers until tender-crisp, about 1 minute.
>  6. Drain.
>  7. Cool under cold running water.
>  8. Set aside...

And so on.

This is a really simple example of an algorithm.

## Using Algorithms in Java

In Computer Science, there are well established methods given to students to help them master algorithms. One of them is the speeding ticket scenario, where you are making a text-based system to calculate fines for speeding, speeding in a construction zone, DUI, and being under 21 with a DUI, etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XSLj46Lfpfk?autoplay=0" frameborder="0" allowfullscreen></iframe>

Here, we step through getting the data with a few conditionals:

```java
public static void main (String args[])
	{
		// Create a scanner to read from keyboard
		Scanner kbd = new Scanner (System.in);

       // declare and assign values to variables that we can use later
		String firstName="N/A",lastName="N/A";
		int age=0, speedLimit=0, actualSpeed=0, mphOverLimit=0;
		int baseFine=0, underAgeFine=0, zoneFine=0, totalFine=0;


   //################ Input ######################
   // Here, the person calculating the fine would enter the data which is
   // read in by the scanner object
   System.out.println("Enter your first name and last name. > ");
   firstName = kbd.next();
   lastName = kbd.next();
   System.out.println("Enter your age. > ");
   age = kbd.nextInt();
   System.out.println("Enter the speed limit. > ");
   speedLimit = kbd.nextInt();
   System.out.println("Enter your actual speed. > ");
   actualSpeed = kbd.nextInt();
   System.out.println("Did the violation occur in a construction zone? Enter yes or no. > ");
   String inConstructionZone = kbd.next();


   //########### Speed Limit Fines #########
   // Algorithm, step by step, giving the computer instructions on how to calculate
   // the fine using conditionals
	 if (actualSpeed > speedLimit)
	 {
		 mphOverLimit = actualSpeed - speedLimit;
	 }
   else
	 {
		 mphOverLimit = 0;
	 }
   if (mphOverLimit < 5)
	 {
		 baseFine = 0;
	 }
	 else if (mphOverLimit <= 20)
	 {
		 baseFine = mphOverLimit / 5 * 30;
	 }
	 else if (mphOverLimit > 20)
	 {
		 baseFine = mphOverLimit / 5 * 50;
	 }

	 //########### Zone Fines ############

   if (mphOverLimit < 5)
	 {
		 zoneFine = 0;
	 }
   else if (inConstructionZone.equals("yes") || inConstructionZone.equals("y") || inConstructionZone.equals("Yes") || inConstructionZone.equals("YES"))
	 {
		 zoneFine = baseFine * baseFine;
	 }
	 else if (inConstructionZone.equals("no") || inConstructionZone.equals("n") || inConstructionZone.equals("No") || inConstructionZone.equals("NO"))
	 {
		 zoneFine = 0;
	 }

	 //############## Age Fines #############

	 if (age < 21 && mphOverLimit > 20)
	 {
		 underAgeFine = 300;
	 }
	 else
	 {
		 underAgeFine = 0;
	 }

   //############# Total Charges ##############

	 totalFine = baseFine + zoneFine + underAgeFine;
	   // Telling the JVM to print out each formatted scanner input on a new line
		System.out.println();
		System.out.format( "name: %s, %s\n",lastName,firstName );
		System.out.format( "age: %d yrs.\n",age );
		System.out.format( "actual speed: %d mph.\n",actualSpeed );
		System.out.format( "speed limit: %d mph.\n",speedLimit );
		System.out.format( "mph over limit: %d mph.\n",mphOverLimit );
		System.out.format( "base fine: $%d\n",baseFine );
		System.out.format( "zone fine: $%d\n",zoneFine );
		System.out.format( "under age fine: $%d\n",underAgeFine );
		System.out.format( "total fine: $%d\n",totalFine );
	} // END MAIN
} // END CLASS
```

## Some More Complex Algorithms

There are more complex, established algorithms that use data structures like arrays, dictionaries, and linked lists. Most algorithms are judged on their complexity and effieciency, where efficiency does not necessarily mean speed.

For example, the [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) algorithm sorts the values in an array from smallest to largest by assessing the first index and comparing it with the next. If the first value is larger than the second, the bubble sort algorithm swaps the two values.

Here is a version of the bubble sort algorithm in pseudocode:

```bash
procedure bubbleSort( list : array of items )

   loop = list.count;

   for i = 0 to loop-1 do:
      swapped = false

      for j = 0 to loop-1 do:

         // compare the adjacent elements
         if list[j] > list[j+1] then
            // swap them
            swap( list[j], list[j+1] )
            swapped = true
         end if

      end for

      // if no number was swapped that means
      // array is sorted now, break the loop

      if(not swapped) then
         break
      end if

   end for

end procedure return list
```
This a simple algorithm yet if you're new to algorithms and programming in general, it may seem a bit daunting.

To see the implementation in java:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RqfWvIsYmsc?autoplay=0" frameborder="0" allowfullscreen></iframe>






