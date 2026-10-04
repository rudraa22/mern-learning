function wait(ms)
{
    return new Promise((resolve) => setTimeout(() => resolve("Rudra"), ms));
}

async function run()
{
    console.log("Start");
    const result = await wait(2000);
    console.log("Hello " + result);
    console.log("End")
}

async function main()
{
    await run();
    await run();
}

main();


