import 'module-alias/register';
import app from "./app";

const port = 3000;
app.listen(port, () => {
    console.log(`=================================`);
    console.log(`🚀 App listening on the port ${port}`);
    console.log(`=================================`);
});
