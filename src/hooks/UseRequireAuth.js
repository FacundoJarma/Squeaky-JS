import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useRequireAuth() {

    useEffect(() => {
        const checkAuth = async () => {
            const { data, error } = await supabase.auth.getSession()

            if (!data.session) {
                window.location.href = '/login'
            }
        }

        checkAuth()
    }, [])
}
