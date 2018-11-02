# .NET FileCache
The .NET File Cache came out of developing ASP.NET MVC applications on a shared hosting environment.  The hosting company would periodically wipe all session data, instantly killing any connections to our application.  After working for several weeks with the hosting company on trying to resolve the issue (there were only able to delay time between wipes or change the time at which wipes occurred), I came up with the solution of ditching the built-in caching mechanism and instead using a file-based caching scheme.  

At the time of this writing, my .NET FileCache is one of the most popular file caching libraries on NuGet with over 21,000 downloads.  

## Technology
* C# / .NET Standard 2.0