# ChemProV
[ChemProV](/img/projects/chemprov.jpg)

From the [Help Lab](http://helplab.org/Projects/ChemProV) website:
The Chemical Process Visualizer (ChemProV) is an educational software environment that supports the construction of process flow diagrams and corresponding material balance equations. As students work, ChemProV generates dynamic feedback messages that alert students to errors in their diagrams and equations, and provide hints on how the errors can be addressed. 

In 2009, I switched from the Woz Pro project to join the ChemProV project.  When I joined the ChemProV, Pawan was just finishing up his masters thesis on the topic.  For his thesis, Pawan wrote a parser to interpret chemical balance equations.  Incorrect balances were accompanied with help scaffolded help messages.  Having wrapped up this work, the team began looking for new directions to take the software.  

Given that Chris' other research project (OSBLE) centered around facilitating asynchronous discussions of coding artifacts, we thought it might be an equally fruitful to take ChemProV.  Thus began our rewrite of ChemProV from a Java-based desktop application to Microsoft's hot new Silverlight web technology.

While Silverlight ended up being a bit of a dead-end technology-wise, it did introduce me to "modern" Windows GUI development using XAML and LINQ.  In addition, we were able to get several papers out of the project and presented the technology at several workshops.  Looking back at my programming history, ChemProV represents an important turning point in my ability to construct well-designed systems.

## View Source
Note: the original source code was located in Microsoft's now-defunct Codeplex.
[View source on github](https://github.com/WSU-HELPLAB/CHEMPROV)

## Technology
### Version 1
* Java 8
* Eclipse Framework

### Version 2
* Silverlight 5.0
* C# / .NET 4.0
* IIS 7