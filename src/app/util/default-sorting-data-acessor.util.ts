export class DefaultSortingDataAcessorUtils {
    static pathDataAccessor(item: any, path: string): any {
        //console.log(path);
        return path.split('.')
            .reduce((accumulator: any, key: string) => {
                return accumulator ? accumulator[key] : undefined;
                }, item);
    }
}




