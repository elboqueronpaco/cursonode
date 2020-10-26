/** Single Thread */

const singleThread = () => {
    process.argv[2] = 'este el argumento numero 3'
    process.argv[3] = 4
    process.argv[4] = null
    process.argv[5] = true
    console.log(`--------------------------`)
    console.log('   EL PROCESO DE NODE.JS    ')
    console.log(`Id del proceso ${process.pid}`)
    console.log(`Titulo ........... ${process.title}`)
    console.log(`Dirección de Node..... ${process.execPath}`)
    console.log(`Directorio actual.... ${process.cwd()}`)
    console.log(`Version de node...... ${process.version}`)
    console.log(`Version de dependencia....... ${process.versions}`)
    console.log(`Plataforma....... ${process.platform}`)
    console.log(`Arquitectura....... ${process.arch}`)
    console.log(`Tiempo activo de node ..... ${process.uptime()}`)
    console.log(`Argumento del proceso...... ${process.argv} `)
    console.log('-----------------------------------')
    /*
    console.log(
        process.argv[0],
        process.argv[1],
        arg2,
        arg3
    )
    */
    /**
     * para obtener todo los array de process.arg
     */
    // mientra halla process.argv
    let key = 0
    for (key in process.argv) { 
        console.log(process.argv[key])
        
    }
}
export default singleThread